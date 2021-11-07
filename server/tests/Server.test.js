/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";

import apiRouter from "../controllers/api";

jest.mock("axios");

describe("apiRouter", () => {
  test("getAll", (done) => {
    const thedata = [
      [
        {
          title: "Hipster Studies",
          body: "I'm baby vape pok pok food truck, whatever butcher subway tile vaporware quinoa. Mixtape truffaut williamsburg polaroid quinoa, four loko hell of kombucha art party hella poutine. Polaroid beard bitte",
          username: "coins",
          background: "green",
          id: "6178f603118ca260775b0bb5",
        },
        {
          title: "Pirate Anatomical Studies",
          body: "Scuttle rigging scurvy cog lee nipper Letter of Marque transom Buccaneer Privateer. Chain Shot ho Letter of Marque hornswaggle booty fathom jack bounty maroon Barbary Coast. Nipperkin Barbary Coast me",
          username: "coins",
          background: "red",
          id: "6178f651118ca260775b0bbb",
        },
        {
          title: "How to be a leader like Donald trump",
          body: "Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like th",
          username: "coins",
          background: "blue",
          id: "6178f682118ca260775b0bc1",
        },
      ],
    ];
    axios.get.mockResolvedValue({ data: thedata });

    apiRouter.getAll().then((data) => {
      expect(data).toBe(thedata);

      expect(axios.get.mock.calls).toHaveLength(1);
      expect(axios.get.mock.calls[0][0]).toBe("/api/notes");

      done();
    });
  });
});
