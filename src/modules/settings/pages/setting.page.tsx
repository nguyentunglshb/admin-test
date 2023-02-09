import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, DatePicker, DatePickerProps, Input, Typography } from "antd";
import dayjs from "dayjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { SettingFormSchema } from "@/validations";
import { RangePickerProps } from "antd/es/date-picker";

const { RangePicker } = DatePicker;

const { Title, Text } = Typography;

interface SettingFormProps {
  title: string;
  email: string;
  color: string;
  date: string[];
}

const initValues = {
  title: "",
  email: "",
  color: "#000000",
} as Partial<SettingFormProps>;

export const SettingPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: initValues,
    resolver: zodResolver(SettingFormSchema),
  });

  const onChange = (
    value: DatePickerProps["value"] | RangePickerProps["value"],
    dateString: [string, string] | string
  ) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };

  const onSubmit = (data: Partial<SettingFormProps>) => console.log(data);

  return (
    <div>
      <Title>Setting Page</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="title"
          render={({ field }) => <Input {...field} placeholder="title" />}
        />
        {errors?.title && <Text type="danger">{errors.title.message}</Text>}
        <Controller
          control={control}
          name="email"
          render={({ field }) => <Input {...field} placeholder="email" />}
        />
        {errors?.email && <Text type="danger">{errors.email.message}</Text>}

        <Controller
          control={control}
          name="color"
          render={({ field }) => (
            <Input {...field} placeholder="color" type="color" />
          )}
        />
        {errors?.color && <Text type="danger">{errors.color.message}</Text>}

        <Controller
          control={control}
          name="date"
          render={({ field: { value, onChange } }) => (
            <div>
              <RangePicker
                value={value?.map((v) => dayjs(v)) ?? ([] as any)}
                onChange={(date, dateString) => onChange(dateString)}
              />
            </div>
          )}
        />
        {errors?.date && <Text type="danger">{errors.date.message}</Text>}

        <div>
          {" "}
          <Button htmlType="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};
