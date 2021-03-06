/*
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * Copyright (c) 2016 Edward Yang
 * All rights reserved.
 *
 */

"use strict";

const co = require("co");


const method = co.wrap(function *() {
    console.log("Hello world.");
    return true;
});

method().catch(function(err) {
    console.error(err.stack);
    process.exit(-1);
});
