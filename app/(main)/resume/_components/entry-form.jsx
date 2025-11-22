"use client";
import { resumeSchema } from "@/app/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const EntryForm = ({ type, entries, onChange }) => {
  const [isAdding, setIsAdding] = useState(false);
  const {
    register,
    handleSubmit: handleValidation,
    formState: { errors },
    watch,
    reset,
    setValue,
  } = useForm({
    resolver: zodResolver(resumeSchema),
    defaultValues: {
      title: "",
      organization: "",
      startDate: "",
      endDate: "",
      description: "",
      current: false,
    },
  });

  const current = watch("current");

  return <div>EntryForm</div>;
};

export default EntryForm;
