import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { IMAGE_TITLE_FIELD } from "../image/ImageTitle";
import { VIDEO_TITLE_FIELD } from "./VideoTitle";

export const VideoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="file" source="file" />
        <TextField label="fileName" source="fileName" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="uploadDate" source="uploadDate" />
        <ReferenceManyField
          reference="DetectedFace"
          target="videoId"
          label="DetectedFaces"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
