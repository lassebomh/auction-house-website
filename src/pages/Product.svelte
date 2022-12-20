<script>
  import Bidder from "./Bidder.svelte";
  import { faker } from '@faker-js/faker';

  let audience = 50;

  function changeAudience() {
    audience = audience + Math.round(Math.random()*2.5 - 1)

    setTimeout(changeAudience, Math.random() * 1000 + 1000)
  }

  changeAudience()


  export let params;

  console.log(params);
</script>

<style>
  tbody :first-child {
    margin-bottom: 1em;
  }
</style>


<section class="text-gray-700 body-font overflow-hidden bg-white">
  <div class=" mx-auto flex flex-wrap min-h-300">
    <img alt="ecommerce" class="w-1/2 h-200 object-cover object-center rounded border border-gray-200" src={faker.image.technics() + "?random="+params.pid}>
    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
      <h2 class="text-sm title-font text-gray-500 tracking-widest uppercase">{faker.commerce.productAdjective()}</h2>
      <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{faker.commerce.productName()}</h1>
      <div class="flex mb-4">
        <span class="flex items-center">
          <span class="bg-red-100 text-red-900 text-xl mr-2 px-3 py-1 rounded">
            {audience} ser dette lige nu
          </span>
          <span class="bg-blue-100 text-blue-900 text-xl mr-2 px-3 py-1 rounded">
            6 timer tilbage
          </span>
        </span>
        <span class="flex py-2 border-gray-200">
          <div class="text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </div>
          <div class="ml-2 nope text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </div>
          <div class="ml-2 nope text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
          </div>
        </span>
      </div>
      <div class="my-4 ">
        <table>
          <tr>
            <th class="pr-2 text-right">Grøn & Olsen's vurdering:</th>
            <td>350 kr.</td>
          </tr>
          <tr>
            <th class="pr-2 text-right">Forum vurdering:</th>
            <td>For meget</td>
          </tr>
        </table>
      </div>
      
      <p class="leading-relaxed">
        Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
      </p>
      <div class="flex mt-6 items-center justify-center pb-5 border-gray-200 mb-5 w-full">
        <Bidder />
      </div>
      <div>

      </div>
    </div>
  </div>
</section>