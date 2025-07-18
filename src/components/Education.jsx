import { Link, Text, View } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

const tw = createTw({ theme: {} });

export default function Education({ data }) {
  return (
    <>
      <Text style={(tw("text-4xl"), { lineHeight: 2 })}>Education</Text>
      {data.map((school, i) => {
        return (
          <View key={`${school.degree}-${i}`} style={tw("my-2")}>
            <View style={tw("flex flex-row justify-between")}>
              <Link
                href={school.organisation.link}
                style={tw("font-bold mr-2 text-base underline")}
                target="_blank"
              >
                {school.organisation.name}
              </Link>

              <Text style={tw("text-base")}>
                {school.dateStarted} - {school.dateEnded}
              </Text>
            </View>

            <View style={tw("flex flex-row")}>
              <Text style={tw("text-base italic mr-2")}>{school.degree}</Text>
              <Text style={tw("text-base")}>{school.fieldOfStudy}</Text>
            </View>
          </View>
        );
      })}
    </>
  );
}
