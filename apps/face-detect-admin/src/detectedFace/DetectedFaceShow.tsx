import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DETECTEDFACE_TITLE_FIELD } from "./DetectedFaceTitle";
import { IMAGE_TITLE_FIELD } from "../image/ImageTitle";
import { VIDEO_TITLE_FIELD } from "../video/VideoTitle";

export const DetectedFaceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="boundingBox" source="boundingBox" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="detectionDate" source="detectionDate" />
        <TextField label="ID" source="id" />
        <ReferenceField label="image" source="image.id" reference="Image">
          <TextField source={IMAGE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="video" source="video.id" reference="Video">
          <TextField source={VIDEO_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="RecognizedFace"
          target="detectedFaceId"
          label="RecognizedFaces"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="detectedFace"
              source="detectedface.id"
              reference="DetectedFace"
            >
              <TextField source={DETECTEDFACE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="personId" source="personId" />
            <TextField label="recognitionDate" source="recognitionDate" />
            <TextField label="recognitionScore" source="recognitionScore" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
