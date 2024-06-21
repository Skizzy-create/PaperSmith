import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("user/papers", (resolver) => {
    return HttpResponse.json([
      {
        id: 1,
        fav: false,
        title: " Semester 2 design of unix os",
        folder: "None",
        CreatedOn: "24 jan 1993 ",
        lastViewed: "24 jan 1993",
        path: "",
        tag: "Only Theory",
      },
      {
        id: 2,
        fav: false,
        title: " Semester 2 Oops concept",
        folder: "None",
        CreatedOn: "25 jan 1993 ",
        lastViewed: "24 jan 1993",
        path: "",
        tags: "Only Mcq",
      },

   


      
      
    ]);
  }),

  http.get("user/folders/",()=>{
    return HttpResponse.json([

      {
      title:"Maths",
      Path: "user/"
      },
      {
        title:"Phyics",
        Path: "user/"
        }

    ])

  })
];
