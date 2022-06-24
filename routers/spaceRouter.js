//Import the Router class from express.
const { Router } = require("express");
const Spaces = require("../models").space;
const Story = require("../models").story;

//Create a new Router instance.
const router = new Router();

//Register a GET endpoint on the / route that sends 'separated' as the response.
router.get("/", async (request, response, next) => {
  try {
    const spaceRouter = await Spaces.findAll();
    response.json(spaceRouter);
  } catch (e) {
    next(e);
  }
});

//Register a GET endpoint to get a space by id, findByPk
router.get("/:id", async (request, response, next) => {
  try {
    //step 1: get the id from the params
    const { id } = request.params;
    //step 2: define a variable and findByPk
    const spaceIdRouter = await Spaces.findByPk(id, { include: [Story] });
    //step 3: send the newly find space as a response
    response.json(spaceIdRouter);
    //ste 4: test it with httpie: http :4000/space/1
  } catch (e) {
    next(e);
  }
});

module.exports = router;
