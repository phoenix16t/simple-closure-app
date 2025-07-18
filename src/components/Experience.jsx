import { Link, Text, View } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

const tw = createTw({ theme: {} });

export default function Experience({ data }) {
  return (
    <>
      <Text style={(tw("text-4xl"), { lineHeight: 2 })}>Experience</Text>
      {data.map((job, i) => {
        return (
          <View key={`${job.title}-${i}`} style={tw("my-2")}>
            <View style={tw("flex flex-row justify-between")}>
              <View style={tw("flex flex-row")}>
                <Link
                  href={job.organisation.salesNavLink}
                  style={tw("font-bold mr-2 text-base underline")}
                  target="_blank"
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
