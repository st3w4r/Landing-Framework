'use strict'

const Metalsmith = require('metalsmith')

const blockList = require('metalsmith-blocks-list')
const concat = require('metalsmith-concat')

const plugin = function () {
  return function (files, metalsmith, done) {
    done()
  }
}

function buildFirst() {
	return new Promise((resolve, reject) => {
		var metalsmith = Metalsmith(__dirname)
      .source('src')
      .destination('dst')
      .use(plugin())
      .use(blockList({
        directoryblocks: 'src'
      }))
      .use(concat({
        files: '**/*.css',
        output: 'landing_page.css'
      }))
      .use(concat({
        files: '**/*.js',
        output: 'landing_page.js'
      }))
			.build((err) => {
				if (err) reject();
				resolve();
			});
	});
}

function buildSecond() {
	return new Promise((resolve, reject) => {
		var metalsmith = Metalsmith(__dirname)
			.destination('dst')
			.use(concat({
        files: '**/**.css',
        output: 'home.css'
      }))
			.build((err) => {
				if (err) reject();
				resolve();
			});
	});
}

buildFirst()
  	// .then(buildSecond)
  	.catch((err) => {
  		if (err) console.error(err);
  	});
