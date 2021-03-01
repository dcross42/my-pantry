//modified from codecademy lesson on server testing with mocha
const {assert} = require('chai');
const request = require('supertest');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const app = require('../index');

const parseTextFromHTML = (htmlAsString, selector) => {
    const selectedElement = new JSDOM(htmlAsString).window.document.querySelector(selector);
    if (selectedElement !== null) {
      return selectedElement.textContent;
    } else {
      throw new Error(`No element with selector ${selector} found in HTML string`);
    }
};

describe('Hello World Test', () => {
    it('Should output hello world', async () => {
        const pageTitle = 'Hello World';
        const response = await request(app).
        get('/').
        send();
        assert.include(parseTextFromHTML(response.text, '#page-title'), pageTitle);
    });
});