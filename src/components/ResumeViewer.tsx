import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";
import { Education, Experience } from ".";
import type { ExperienceProps } from "./Experience";
import type { EducationProps } from "./Education";

type ResumeData = {
  name: string;
  img: string;
  experience: ExperienceProps["data"];
  education: EducationProps["data"];
};

type ResumeViewerProps = {
  data: ResumeData;
};

const tw = createTw({ theme: {} });

export default function ResumeViewer({ data }: ResumeViewerProps) {
  return (
    <Document>
      <Page size="A4">
        <View style={tw("flex max-w-6xl flex-col p-4")}>
          <View
            fixed
            style={tw("flex flex-row items-baseline justify-center my-2")}
          >
            <Image src={data.img} style={tw("w-28 h-28 mr-4")} />
            <Text style={tw("text-4xl")}>{data.name}'s resume</Text>
          </View>

          <View style={tw("mb-10")}>
            <Experience data={data.experience} />
          </View>
          <Education data={data.education} />
        </View>
      </Page>
    </Document>
  );
}
