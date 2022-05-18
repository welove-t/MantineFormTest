import type { NextPage } from "next";
import { useForm } from "@mantine/form";
import { Button, TextInput } from "@mantine/core";

const Home: NextPage = () => {
  const form = useForm({
    initialValues: {
      name: "",
    },

    validate: {
      name: (value) => (value.length > 10 ? "error" : null),
    },
  });
  return (
    <div style={{ margin: "40px" }}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="氏名"
          placeholder="フルネーム"
          {...form.getInputProps("name")}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Home;
