import React from "react";
import { Container, FeatureImage, Content, ContentCard } from "../components";

export const IndexPage = () => 
{
  return(
    <Container>
      <FeatureImage/>
      <Content>
        <ContentCard date="20/12/2020" title="Test Title" excerpt="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad quis nobis eius recusandae rerum cum magnam perspiciatis vero ea voluptatum." slug="/test" />
      </Content>
    </Container>
  )
}

export default IndexPage;


