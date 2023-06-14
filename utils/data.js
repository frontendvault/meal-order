// import bcrypt from "bcryptjs";

const data = {
  // users: [
  //   {
  //     name: "Godfrey",
  //     email: "manoj07.pathania@gmail.com",
  //     password: bcrypt.hashSync("admin1234567"),
  //     isAdmin: true,
  //   },
  //   {
  //     name: "Aki",
  //     email: "aki@yokunbo.com",
  //     password: bcrypt.hashSync("123456789"),
  //     isAdmin: false,
  //   },
  // ],
  meals: [
    {
      name: "Steak n Cheese Burrito, double line  ",
      slug: "steak-n-cheese",
      imageUrl: "/images/meal1.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
      longDescription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      category: "Tasty",
      price: 50.0,
      rating: 4,
      review: 22,
      countInStock: 5,
      ingredients: [
        {
          name: 'Bacon',
          image: 'https://functionflo-cdn.azureedge.net/prd-a14b15f04c74493192bdbaed6f00ddd1/03a46dca-f1ea-4839-a825-f0568dc3bcda.png?updatedV2=2021-04-07_15-21-32',
        },
        {
          name: 'Cheeseburger Crumble',
          image: 'https://functionflo-cdn.azureedge.net/prd-a14b15f04c74493192bdbaed6f00ddd1/15cd3266-9f3f-433b-f374-08dac36ebb41.png?updatedV2=2022-11-10_22-55-58',
        },
        {
          name: 'Cavatappi Pasta',
          image: 'https://functionflo-cdn.azureedge.net/prd-a14b15f04c74493192bdbaed6f00ddd1/794734b2-8c12-4e63-f5b0-08da95bde22d.png?updatedV2=2022-09-13_19-26-40'
        },
        {
          name: 'Cheese Sauce',
          image: 'https://functionflo-cdn.azureedge.net/prd-a14b15f04c74493192bdbaed6f00ddd1/38b8e568-4d27-4727-5bdf-08dac36e7978.png?updatedV2=2022-11-10_22-54-08'
        },
        {
          name: 'Tomato & Dill',
          image: 'https://functionflo-cdn.azureedge.net/prd-a14b15f04c74493192bdbaed6f00ddd1/b468c023-2444-4741-3678-08dac3711acf.png?updatedV2=2022-11-10_23-12-57',
        }
      ],
      tags: [
        {
          name: "new",
          order: 1
        },
        {
          name: "No Eggs",
          order: 2
        },
        {
          name: "No Fish",
          order: 3
        },
        {
          name: "No Tree Nuts",
          order: 4
        }
      ],
      nutrients: [
        {
          name: "Protein",
          value: 20,
          unit: "g",
          subValue: 1.5,
          subUnit: "oz"
        },
        {
          name: "Serving Size",
          value: 10,
          unit: "oz",
          subValue: 283,
          subUnit: "g"
        },
        {
          name: "1 Serving Per Container",
          value: "Per Serving",
          unit: "",
        },
        {
          name: "Calories",
          value: 590,
        },
        {
          name: "Total Fat",
          value: 32,
          unit: "g",
          subValue: 41,
          subUnit: "%"
        },
        {
          name: "Saturated Fat",
          value: 13,
          unit: "g",
          subValue: 65,
          subUnit: "%"
        },
        {
          name: "Trans Fat",
          value: 0,
          unit: "g",
        },
        {
          name: "Cholesterol",
          value: 85,
          unit: "mg",
          subValue: 28,
          subUnit: "%"
        },
      ]
    },
    {
      name: "Chicken Carne Asada Plate  double line title",
      slug: "chicken-carne",
      imageUrl: "/images/meal2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, veniam. ",
      longDescription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      category: "Healthy",
      price: 50.99,
      rating: 3,
      review: 22,
      countInStock: 12,
    },
    {
      name: "Bread Like  double line title",
      slug: "bread-like",
      imageUrl: "/images/meal3.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, veniam. ",
      longDescription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      category: "Heavy",
      price: 50.89,
      rating: 4,
      review: 22,
      countInStock: 22,
    },
    {
      name: "Luxe Signature  double line title",
      slug: "luxe-signaure",
      imageUrl: "/images/meal4.jpg",
      description:
        "                                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      longDescription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      category: "Healthy",
      price: 50.01,
      rating: 2,
      review: 22,
      countInStock: 10,
    },
    {
      name: "Luxe X London  double line title",
      slug: "luxe-x-london",
      imageUrl: "/images/meal5.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, veniam. ",
      longDescription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      category: "Rich",
      price: 50.23,
      rating: 3,
      review: 22,
      countInStock: 14,
    },
    {
      name: "Shrimp & Veggies Bowl title ",
      slug: "shrimps-n-veggies",
      imageUrl: "/images/meal6.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, veniam. ",
      longDescription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      category: "Healthy",
      price: 49.0,
      rating: 4,
      review: 22,
      countInStock: 2,
    },
    {
      name: "Luxe Main,  double line title",
      slug: "luxe-main",
      imageUrl: "/images/meal7.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, veniam. ",
      longDescription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      category: "Nutritious",
      price: 99.99,
      rating: 4,
      review: 22,
      countInStock: 20,
    },
    {
      name: "Luxe X Bali,  double line title",
      slug: "luxe-x-bali",
      imageUrl: "/images/meal8.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, veniam. ",
      longDescription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      category: "Spicy",
      price: 56.99,
      rating: 4,
      review: 22,
      countInStock: 11,
    },
    {
      name: "Walts  double line title",
      slug: "walts",
      imageUrl: "/images/meal9.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, veniam. ",
      longDescription:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
      category: "Rich",
      price: 50.99,
      rating: 4,
      countInStock: 20,
    },
  ],
};

export default data;
