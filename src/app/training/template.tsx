import type {
  ReactNode
} from "react";

import {
  CourseRegistrationLinks
} from "./course-registration-links";


type TrainingTemplateProps = {
  children:
    ReactNode;
};


export default function TrainingTemplate({
  children
}: TrainingTemplateProps) {

  return (
    <>
      <CourseRegistrationLinks />

      {children}
    </>
  );

}
