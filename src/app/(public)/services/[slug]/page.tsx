"use client";

import AddReview from "@/components/services/AddReview";
import ServiceDetailsSidebar from "@/components/services/ServiceDetailsSidebar";
import ServiceReviews from "@/components/services/ServiceReviews";
import Container from "@/components/ui/Container";
import PageLoading from "@/components/ui/PageLoading";
import { useTaskBySlugQuery } from "@/redux/features/tasks/tasksApi";
import { useSession } from "next-auth/react";
import Image from "next/image";

const BuyerPage = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const slug = params.slug;

  const { data: session } = useSession();
  const role = (session as any)?.role;
  const userId = (session as any)?.userId;

  const { data, isLoading, isError } = useTaskBySlugQuery(slug);

  let content = null;
  if (isLoading) return <PageLoading />;

  if (!isLoading && isError) {
    content = <div>error</div>;
  }

  const {
    id: taskId,
    title,
    imageUrl,
    address,
    categoryId,
    description,
    price,
    createdAt,
    taskReviews,
    sellerId,
  } = data || {};
  console.log("data", data);
  
  const isBuyerReviewed =
    taskReviews &&
    taskReviews?.length > 0 &&
    taskReviews?.some((review: any) => review.buyer.userId === userId);

  return (
    <section className="py-20">
      <Container className="flex flex-col md:flex-row gap-y-12 md:gap-y-0 gap-x-20 items-start">
        <div className="md:basis-[60%]">
          <Image
            src={imageUrl as string}
            alt={title as string}
            width={1000}
            height={500}
            className="mb-5"
          />
          <h2 className="text-2xl mb-5 text-white">{data?.title}</h2>
          <p className="text-base">
            {description}
          </p>
          <div>
            {taskReviews && taskReviews?.length > 0 && (
              <ServiceReviews taskReviews={taskReviews} />
            )}
          </div>
          {role === "buyer" && !isBuyerReviewed && (
            <AddReview taskId={taskId} />
          )}
        </div>
        <ServiceDetailsSidebar
          price={price}
          taskId={taskId}
          sellerId={sellerId}
        />
      </Container>
    </section>
  );
};

export default BuyerPage;
