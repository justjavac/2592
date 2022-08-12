/** @jsx h */
/** @jsxFrag Fragment */

/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.152.0/http/server.ts";
import { Fragment, h, html } from "https://deno.land/x/htm@0.0.10/mod.tsx";
import { UnoCSS } from "https://deno.land/x/htm@0.0.10/plugins.ts";

html.use(UnoCSS());

let exp: h.JSX.Element;

for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    for (let k = 1; k <= 9; k++) {
      for (let l = 1; l <= 9; l++) {
        if (i ** j * k ** l === 1000 * i + 100 * j + 10 * k + l) {
          exp = (
            <>
              {i}
              <sup>{j}</sup> * {k}
              <sup>{l}</sup> = {i}
              {j}
              {k}
              {l}
            </>
          );
        }
      }
    }
  }
}

const handler = (_req: Request) =>
  html({
    title: "2592",
    body: (
      <div
        class="flex flex-col items-center justify-center w-full h-screen"
        style="background-image:url('https://dash.deno.com/assets/background-pattern.svg')"
      >
        <h1 class="text-4xl font-bold text-gray-800">{exp}</h1>
        <p class="mt-2 text-lg text-center text-gray-600">
          Develop Locally, Deploy Globally
        </p>
        <footer class="fixed bottom-8 w-full h-6 flex items-center justify-center gap-2 text-gray-800">
          Powered by
          <a
            class="flex items-center gap-2 text-sm text-black no-underline font-semibold"
            href="https://deno.com/deploy"
          >
            <img
              alt="Deno"
              src="https://dash.deno.com/assets/logo.svg"
              class="w-5"
            />{" "}
            Deno Deploy
          </a>
        </footer>
      </div>
    ),
  });

serve(handler);
