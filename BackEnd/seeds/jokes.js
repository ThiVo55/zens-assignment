/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("jokes").del();
  await knex("jokes").insert([
    {
      id: 1,
      title: "A child asked his father",
      summary: 'A child asked his father, "How were people born?"',
      content: `A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on."
    The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."
    The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."`,
    },
    {
      id: 2,
      title: `Teacher: "Kids,what does the chicken give you?"`,
      summary: 'Teacher: "Kids,what does the chicken give you?"',
      content: `Teacher: "Kids,what does the chicken give you?" 
      Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" 
      Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" 
      Student: "Homework!"`,
    },
    {
      id: 3,
      title: "The teacher asked Jimmy",
      summary:
        'The teacher asked Jimmy, "Why is your cat at school today Jimmy?" ',
      content: `The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'"`,
    },
    {
      id: 4,
      title: `The housewife`,
      summary:
        'A housewife, an accountant and a lawyer were asked "How much is 2+2?"',
      content: `A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"`,
    },
  ]);
};
