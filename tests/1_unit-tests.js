const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();
const bi = "american-to-british";
const am = "british-to-american";
suite("Unit Tests", () => {
  test("#t1", function () {
    assert.equal(
      translator.translate("Mangoes are my favorite fruit", bi),
      'Mangoes are my <span class="highlight">favourite</span> fruit'
    );
  });
  test("#t2", function () {
    assert.equal(
      translator.translate("I ate yogurt for breakfast", bi),
      'I ate <span class="highlight">yoghurt</span> for breakfast'
    );
  });
  test("#t3", function () {
    assert.equal(
      translator.translate("We had a party at my friend's condo", bi),
      `We had a party at my friend's <span class="highlight">flat</span>`
    );
  });

  test("#t4", function () {
    assert.equal(
      translator.translate("Can you toss this in the trashcan for me?", bi),
      'Can you toss this in the <span class="highlight">bin</span> for me?'
    );
  });

  test("#t5", function () {
    assert.equal(
      translator.translate("The parking lot was full", bi),
      "Everything looks good to me!"
    );
  });

  test("#t6", function () {
    assert.equal(
      translator.translate("Like a high tech Rube Goldberg machine", bi),
      "Everything looks good to me!"
    );
  });

  test("#t7", function () {
    assert.equal(
      translator.translate("To play hooky means to skip class or work", bi),
      "Everything looks good to me!"
    );
  });

  test("#t8", function () {
    assert.equal(
      translator.translate("No Mr. Bond, I expect you to die", bi),
      'No <span class="highlight">Mr</span> Bond, I expect you to die'
    );
  });

  test("#t9", function () {
    assert.equal(
      translator.translate("Dr. Grosh will see you now", bi),
      '<span class="highlight">Dr</span> Grosh will see you now'
    );
  });

  test("#t10", function () {
    assert.equal(
      translator.translate("Lunch is at 12:15 today", bi),
      'Lunch is at <span class="highlight">12.15</span> today'
    );
  });

  test("#t11", function () {
    assert.equal(
      translator.translate("We watched the footie match for a while", am),
      "Everything looks good to me!"
    );
  });

  test("#t12", function () {
    assert.equal(
      translator.translate("Paracetamol takes up to an hour to work", am),
      '<span class="highlight">tylenol</span> takes up to an hour to work'
    );
  });
  test("#t13", function () {
    assert.equal(
      translator.translate("First, caramelise the onions", am),
      'First, <span class="highlight">caramelize</span> the onions'
    );
  });
  test("#t14", function () {
    assert.equal(
      translator.translate("I spent the bank holiday at the funfair", am),
      "Everything looks good to me!"
    );
  });
  test("#t15", function () {
    assert.equal(
      translator.translate("I had a bicky then went to the chippy", am),
      "Everything looks good to me!"
    );
  });
  test("#t16", function () {
    assert.equal(
      translator.translate("I've just got bits and bobs in my bum bag", am),
      "Everything looks good to me!"
    );
  });
  test("#t17", function () {
    assert.equal(
      translator.translate(
        "The car boot sale at Boxted Airfield was called off",
        am
      ),
      "Everything looks good to me!"
    );
  });
  test("#t18", function () {
    assert.equal(
      translator.translate("Have you met Mrs Kalyani?", am),
      'Have you met <span class="highlight">Mrs.</span> Kalyani?'
    );
  });
  test("#t19", function () {
    assert.equal(
      translator.translate("Prof Joyner of King's College, London", am),
      `<span class="highlight">Prof.</span> Joyner of King's College, London`
    );
  });
  test("#t20", function () {
    assert.equal(
      translator.translate("Tea time is usually around 4 or 4.30", am),
      'Tea time is usually around 4 or <span class="highlight">4:30</span>'
    );
  });
  test("#t22", function () {
    assert.equal(
      translator.translate("Mangoes are my favorite fruit", bi),
      'Mangoes are my <span class="highlight">favourite</span> fruit'
    );
  });
  test("#t23", function () {
    assert.equal(
      translator.translate("I ate yogurt for breakfast", bi),
      'I ate <span class="highlight">yoghurt</span> for breakfast'
    );
  });
  test("#t24", function () {
    assert.equal(
      translator.translate("We watched the footie match for a while", am),
      "Everything looks good to me!"
    );
  });

  test("#t25", function () {
    assert.equal(
      translator.translate("Paracetamol takes up to an hour to work", am),
      '<span class="highlight">tylenol</span> takes up to an hour to work'
    );
  });
});
