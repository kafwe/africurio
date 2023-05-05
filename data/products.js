const products = [
        {
          "id": "1",
          "name": "Hand-Carved Wooden Bowl",
          "description": "This beautiful hand-carved wooden bowl is perfect for displaying fruit or other decorative items. The intricate designs and patterns make it a true work of art.",
          "category": "decor",
          "categoryName": "Decor",
          "price": 800,
          "imageSrc": "bowl.jpg",
          "imageAlt": "Hand-Carved Wooden Bowl"
        },
        {
          "id": "2",
          "name": "African Print Table Runner",
          "description": "Add a pop of color and culture to your dining table with this African print table runner. Made with high-quality fabric and featuring bold patterns and colors, this table runner is sure to impress.",
          "category": "decor",
          "categoryName": "Decor",
          "price": 250,
          "imageSrc": "tablerunner.jpg",
          "imageAlt": "African Print Table Runner"
        },
        {
          "id": "3",
          "name": "Hand-Woven Basket",
          "description": "This hand-woven basket is perfect for storing blankets, magazines, or other household items. Made with natural fibers and featuring intricate patterns, this basket is both beautiful and functional.",
          "category": "decor",
          "categoryName": "Decor",
          "price": 450,
          "imageSrc": "basket.png",
          "imageAlt": "Hand-Woven Basket"
        },
        {
          "id": "4",
          "name": "African Mask Wall Art",
          "description": "This stunning African mask is made from high-quality materials and features intricate carvings and patterns. Hang it on your wall to add a touch of African culture and art to your home.",
          "category": "decor",
          "categoryName": "Decor",
          "price": 1200,
          "imageSrc": "mask.webp",
          "imageAlt": "African Mask Wall Art"
        },
        {
          "id": "5",
          "name": "Hand-Painted Ceramic Vase",
          "description": "This beautiful hand-painted ceramic vase is perfect for displaying fresh flowers or other decorative items. The intricate designs and patterns make it a true work of art.",
          "category": "decor",
          "categoryName": "Decor",
          "price": 650,
          "imageSrc": "vase.jpg",
          "imageAlt": "Hand-Painted Ceramic Vase"
        },
        {
          "id": "6",
          "name": "African Tribal Wall Hanging",
          "description": "This beautiful African tribal wall hanging is made from high-quality materials and features intricate patterns and designs. Hang it on your wall to add a touch of African culture and art to your home.",
          "category": "decor",
          "categoryName": "Decor",
          "price": 900,
          "imageSrc": "wall-hanging.jpg",
          "imageAlt": "African Tribal Wall Hanging"
        },
        {
            "id": "8",
            "name": "Rhino Statue",
            "description": "This beautiful malachite rhino statue is a true work of art. The rhino is carved in incredible detail.",
            "category": "decor",
            "categoryName": "Decor",
            "price": 1200,
            "imageSrc": "rhino.jpg",
            "imageAlt": "Rhino Statue"
        },
        {
            "id": "9",
            "name": "Kente cloth scarf",
            "description": "This beautiful Kente cloth scarf is handwoven in Ghana and features a traditional Kente design. The scarf is made from high-quality cotton and can be worn as a fashionable accessory or used to keep you warm on chilly days. It also makes for a great gift for friends and family.",
            "category": "clothing",
            "categoryName": "Clothing & Accessories",
            "price": 290,
            "imageSrc": "kente-cloth-scarf.jpg",
            "imageAlt": "Kente cloth scarf"
            },
            {
              "id": "10",
              "name": "Maasai beaded necklace",
              "description": "This stunning Maasai beaded necklace is handcrafted in Kenya and features a traditional Maasai design. The necklace is made from colorful beads and can be worn as a statement piece to add a pop of color to any outfit. It is also a great way to show support for the Maasai community.",
              "category": "clothing",
              "categoryName": "Clothing & Accessories",
              "price": 390,
              "imageSrc": "maasai-beaded-necklace.webp",
              "imageAlt": "Maasai beaded necklace"
            },
            {
              "id": "11",
              "name": "African print headwrap",
              "description": "This beautiful African print headwrap is handcrafted in Nigeria and features a vibrant African print design. The headwrap can be worn in a variety of styles to suit your mood and outfit, and is made from high-quality cotton fabric that is gentle on your skin.",
              "category": "clothing",
              "categoryName": "Clothing & Accessories",
              "price": 190,
              "imageSrc": "african-print-headwrap.webp",
              "imageAlt": "African print headwrap"
            },
            {
              "id": "12",
              "name": "Beaded leather sandals",
              "description": "These stylish beaded leather sandals are handcrafted in Morocco and feature intricate beadwork on the straps. The sandals are made from high-quality leather and are both comfortable and durable, making them perfect for everyday wear. They also make for a great gift for friends and family.",
              "category": "clothing",
              "categoryName": "Clothing & Accessories",
              "price": 790,
              "imageSrc": "beaded-leather-sandals.webp",
              "imageAlt": "Beaded leather sandals"
            },
            {
              "id": "13",
              "name": "Kente cloth bow tie",
              "description": "This stylish Kente cloth bow tie is handwoven in Ghana and features a traditional Kente design. The bow tie is made from high-quality cotton and is perfect for adding a touch of African culture to any formal outfit. It also makes for a great gift for the stylish men in your life.",
              "category": "clothing",
              "categoryName": "Clothing & Accessories",
              "price": 240,
              "imageSrc": "kente-cloth-bow-tie.webp",
              "imageAlt": "Kente cloth bow tie"
            },
            {
              "id": "14",
              "name": "Zulu shield",
              "description": "This authentic Zulu shield is made from cowhide and wood and decorated with traditional patterns. It is a symbol of the Zulu warriors and their bravery in battle. The shield can be used as a wall decoration or a cultural souvenir.",
              "category": "arts",
              "categoryName": "Arts & Collectibles",
              "price": 490,
              "imageSrc": "zulu-shield.webp",
              "imageAlt": "Zulu shield"
            },
            {
              "id": "15",
              "name": "Shona stone sculpture",
              "description": "This beautiful Shona stone sculpture is carved from serpentine stone by skilled artisans in Zimbabwe. It depicts a mother and child in a loving embrace and represents the bond between family. The sculpture is a unique piece of art that can enhance any space.",
              "category": "arts",
              "categoryName": "Arts & Collectibles",
              "price": 590,
              "imageSrc": "shona-stone-sculpture.jpg",
              "imageAlt": "Shona stone sculpture"
            },
            {
              "id": "16",
              "name": "Tinga Tinga painting",
              "description": "This colorful Tinga Tinga painting is inspired by the wildlife and nature of Tanzania. It is painted with enamel paint on canvas and features a vibrant scene of animals and plants. The painting is a perfect example of the Tinga Tinga style, which originated from the artist Edward Saidi Tingatinga.",
              "category": "arts",
              "categoryName": "Arts & Collectibles",
              "price": 690,
              "imageSrc": "tinga-tinga-painting.jpg",
              "imageAlt": "Tinga Tinga painting"
            },
            {
              "id": "17",
              "name": "Bogolanfini mud cloth",
              "description": "This stunning Bogolanfini mud cloth is handwoven and dyed with natural materials by the Bamana people of Mali. It features geometric patterns and symbols that have cultural and spiritual meanings. The cloth can be used as a wall hanging, a tablecloth, or a throw.",
              "category": "arts",
              "categoryName": "Arts & Collectibles",
              "price": 790,
              "imageSrc": "bogolanfini-mud-cloth.jpg",
              "imageAlt": "Bogolanfini mud cloth"
            },
            {
              "id": "18",
              "name": "Ndebele doll",
              "description": "This charming Ndebele doll is handmade by the Ndebele women of South Africa. It is dressed in colorful beads and fabric that reflect the Ndebele culture and identity. The doll can be used as a toy, a decoration, or a gift.",
              "category": "arts",
              "categoryName": "Arts & Collectibles",
              "price": 290,
              "imageSrc": "ndebele-doll.jpg",
              "imageAlt": "Ndebele doll"
          },
          {
              "id": "19",
              "name": "Kuba cloth pillow cover",
              "description": "This elegant Kuba cloth pillow cover is made from raffia fiber that is dyed and embroidered by the Kuba people of Congo. It features intricate patterns and textures that showcase the Kuba artistry and craftsmanship. The pillow cover can add a touch of sophistication and comfort to any sofa or bed.",
              "category": "arts",
              "categoryName": "Arts & Collectibles",
              "price": 190,
              "imageSrc": "kuba-cloth-pillow-cover.jpg",
              "imageAlt": "Kuba cloth pillow cover"
          }
      
]

export default products;