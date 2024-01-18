"use client";

import BreadCrumb from "@/components/ui/BreadCrumb";
import Button from "@/components/ui/Button";
import Form from "@/components/ui/Form";
import FormTextArea from "@/components/ui/FormTextArea";
import {
  useCreateTestimonialMutation,
  useTestmonialsQuery,
} from "@/redux/features/testimonial/testimonialApi";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

const AddFeedBack = () => {
  const { data: session } = useSession();
  const userId = (session as any)?.userId;
  const query = `?userId=${userId}`;
  const items = [
    {
      name: "Dashboard",
      slug: `/dashboard`,
    },
  ];
  const { data, isLoading } = useTestmonialsQuery(query);

  const [addFeedback] = useCreateTestimonialMutation();

  const handleSubmit = async (data: any) => {
    try {
      await addFeedback({
        description: data.description,
        userId: (session as any)?.userId,
      }).unwrap();
      toast.success("Feedback added successfully");
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const isFeedbackGiven = !isLoading && data?.data?.length === 0;

  return (
    <section className="p-5">
      <BreadCrumb items={items} />
      <h1 className="my-5 text-2xl font-semibold">
        {!isFeedbackGiven
          ? "You have already given a feedback"
          : "Add a Feedback"}
      </h1>
      {isFeedbackGiven && (
        <Form submitHandler={handleSubmit}>
          <FormTextArea
            className="max-w-md h-40 text-white"
            name="description"
            label="Feedback"
            placeholder="Enter your feedback"
            required
          />
          <Button type="submit" className="mt-3 max-w-[200px]">
            Add Feedback
          </Button>
        </Form>
      )}
    </section>
  );
};

export default AddFeedBack;
