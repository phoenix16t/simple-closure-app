import { Link, Text, View } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

type Job = {
  organisation: {
    name: string;
    salesNavLink: string;
  };
  title: string;
  dateStarted: string;
  dateEnded: string;
  location: string;
  description?: string;
};

export type ExperienceProps = {
  data: Job[];
};

const tw = createTw({ theme: {} });

export default function Experience({ data }: ExperienceProps) {
  return (
    <>
      <Text style={[tw("text-4xl mb-4"), { lineHeight: 1 }]}>Experience</Text>
      {data.map((job, i) => {
        return (
          <View key={`${job.title}-${i}`} style={tw("my-2")}>
            <View style={tw("flex flex-row justify-between")}>
              <View style={tw("flex flex-row")}>
                <Link
                  href={job.organisation.salesNavLink}
                  style={tw("font-bold mr-2 text-base underline")}
                >
                  {job.organisation.name}
                </Link>
                <Text style={tw("text-base italic")}>{job.title}</Text>
              </View>

              <Text style={tw("text-base")}>
                {job.dateStarted} - {job.dateEnded}
              </Text>
            </View>

            <Text style={tw("text-base")}>{job.location}</Text>

            {job.description?.split("\n").map((line, j) => (
              <Text key={j} style={tw("text-base")}>
                {line}
              </Text>
            ))}
          </View>
        );
      })}
    </>
  );
}
