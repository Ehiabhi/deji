import React, { useState } from "react";
import styled from "styled-components";
import image1 from "./assets/category/1.jpg";
import image2 from "./assets/category/2.jpg";
import image3 from "./assets/category/3.jpg";
import image4 from "./assets/category/4.jpg";
import image5 from "./assets/category/5.jpg";
import image6 from "./assets/category/6.jpg";

const CategoryWrapper = styled.div`
  width: 100%;
`;

const Label = styled.h4`
  font-weight: 300;
`;

const Slider = styled.div`
  display: flex;
  overflow: auto;
`;

const Images = styled.div`
  min-width: 7em;
  min-height: 7em;
  border-radius: 5px;
  margin-right: 0.5em;
  background-size: cover;
  position: relative;

  .category-text {
    position: absolute;
    bottom: 0;
    margin: 0;
    padding: 0 .7em .5em;
    color: white;
  }
`;

const SliderIndicator = styled.div`
  margin-top: 0.7em;
  display: flex;
  justify-content: center;
`;

const SlideLeft = styled.div`
  width: 0.7em;
  height: 0.7em;
  background-color: var(--color-grey);
  border-radius: 50%;

  &.active {
    background: var(--color-active);
  }
`;

const SlideRight = styled(SlideLeft)`
  margin-left: 0.5em;
`;

const categories = [
  { image: image1, text: "Beauty & Health" },
  { image: image2, text: "Women's Shoes" },
  { image: image3, text: "Men's Shoes" },
  { image: image4, text: "Women's Accessories" },
  { image: image5, text: "Men's Accessories" },
  { image: image6, text: "Bags" },
];

const categories_updated = [
  { image: image4, text: "Women's Accessories" },
  { image: image5, text: "Men's Accessories" },
  { image: image6, text: "Bags" },
];

const ImageWrapper = () => {
  return (
    <CategoryWrapper>
      <Label>TOP CATEGORY</Label>
      <Slider>
        {categories.map((category, index) => {
          return (
            <Images
              key={index}
              style={{
                backgroundImage: `linear-gradient(transparent, rgba(0,0,0,.6)), url(${category.image})`,
              }}
            >
              <p className="category-text">{category.text}</p>
            </Images>
          );
        })}
      </Slider>
    </CategoryWrapper>
  );
};

const ImageWrapperUpdated = () => {
  return (
    <CategoryWrapper>
      <Label>TOP CATEGORY</Label>
      <Slider>
        {categories_updated.map((category, index) => {
          return (
            <Images
              key={index}
              style={{
                backgroundImage: `linear-gradient(transparent, rgba(0,0,0,.6)), url(${category.image})`,
              }}
            >
              <p className="category-text">{category.text}</p>
            </Images>
          );
        })}
      </Slider>
    </CategoryWrapper>
  );
};

export default function Category() {
  const [isLeft, setIsLeft] = useState(true);
  const [isRight, setIsRight] = useState(false);

  const slideRight = () => {
    if (document.getElementById("slideRight").classList.contains("active")) {
      return;
    }
    setIsLeft(!isLeft);
    setIsRight(!isRight);
    document.getElementById("slideLeft").classList.remove("active");
    document.getElementById("slideRight").classList.add("active");
  };

  const slideLeft = () => {
    if (document.getElementById("slideLeft").classList.contains("active")) {
      return;
    }
    setIsRight(!isRight);
    setIsLeft(!isLeft);
    document.getElementById("slideRight").classList.remove("active");
    document.getElementById("slideLeft").classList.add("active");
  };


  if (isLeft === true) {
    return (
      <>
        {isLeft && <ImageWrapper />}
        <SliderIndicator>
          <SlideLeft
            id="slideLeft"
            className="active"
            onClick={slideLeft}
          ></SlideLeft>
          <SlideRight id="slideRight" onClick={slideRight}></SlideRight>
        </SliderIndicator>
      </>
    );
  }

  if (isRight === true) {
    return (
      <>
        {isRight && <ImageWrapperUpdated />}
        <SliderIndicator>
          <SlideLeft
            id="slideLeft"
            className="active"
            onClick={slideLeft}
          ></SlideLeft>
          <SlideRight id="slideRight" onClick={slideRight}></SlideRight>
        </SliderIndicator>
      </>
    );
  }
}
