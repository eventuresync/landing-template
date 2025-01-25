import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { QueryData } from "./interface";

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/${
    process.env.CONTENTFUL_SPACE_ID ||
    process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
  }`,
  headers: {
    Authorization: `Bearer ${
      process.env.CONTENTFUL_ACCESS_TOKEN ||
      process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
    }`,
  },
  cache: new InMemoryCache(),
});

const landingPageQuery = gql`
  {
    pageCollection(where: { slug: "landing" }, limit: 1) {
      items {
        slug
        componentsCollection(limit: 22) {
          items {
            __typename
            ...header
            ...hero
            ...reality
            ...testimonials
            ...program
            ...videoTestimonial
            ...module
            ...courseIncludes
            ...aboutPilar
            ...pricing
            ...studentResults
            ...faq
            ...callToAction
          }
        }
      }
    }
  }

  fragment header on Header {
    sys {
      id
    }
    title
    image {
      url
    }
  }

  fragment hero on Hero {
    sys {
      id
    }
    mainTitle
    subtitle
    buttonText
    videoId
    titleResponsive {
      json
    }
  }

  fragment reality on Reality {
    sys {
      id
    }
    title
    icon
    subtitle
    finalNote {
      json
    }
    points {
      json
    }
  }

  fragment testimonials on Testimonials {
    sys {
      id
    }
    title
    sub {
      json
    }
    subtitleResponsive {
      json
    }
    finalText
    testimonialImagesCollection(limit: 6) {
      items {
        url
      }
    }
  }

  fragment program on Program {
    sys {
      id
    }
    welcomeText
    mainTitle
    image {
      url
    }
    desc {
      json
    }
    descMobile {
      json
    }
  }

  fragment videoTestimonial on VideoTestimonial {
    sys {
      id
    }
    title
    subtitle
    videoUrl
  }

  fragment module on Module {
    sys {
      id
    }
    title
    icon
    description
  }

  fragment courseIncludes on CourseIncludes {
    sys {
      id
    }
    title
    buttonText
    features {
      json
    }
    icon
  }

  fragment aboutPilar on AboutPilar {
    sys {
      id
    }
    title
    image {
      url
    }
    biography {
      json
    }
  }

  fragment pricing on Pricing {
    sys {
      id
    }
    title
    plansCollection(limit: 2) {
      items {
        title
        price
        paymentType
        features {
          json
        }
        buttonText
        buttonLink
      }
    }
  }

  fragment studentResults on StudentResults {
    sys {
      id
    }
    textTitle {
      json
    }
    entry
    testimonialImagesCollection(limit: 6) {
      items {
        url
      }
    }
  }

  fragment faq on Faq {
    sys {
      id
    }
    title
    questionsCollection(limit: 12) {
      items {
        question
        answer
      }
    }
  }

  fragment callToAction on CallToAction {
    sys {
      id
    }
    title
    sub {
      json
    }
    buttonText
  }
`;

export const getLanding: () => Promise<QueryData> = async () => {
  const { data } = await client.query({ query: landingPageQuery });
  return data;
};
