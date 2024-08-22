import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ImageTitle } from "../image/ImageTitle";
import { RecognizedFaceTitle } from "../recognizedFace/RecognizedFaceTitle";
import { VideoTitle } from "../video/VideoTitle";

export const DetectedFaceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <DateTimeInput label="detectionDate" source="detectionDate" />
        <ReferenceInput source="image.id" reference="Image" label="image">
          <SelectInput optionText={ImageTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="recognizedFaces"
          reference="RecognizedFace"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RecognizedFaceTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="video.id" reference="Video" label="video">
          <SelectInput optionText={VideoTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
