<script lang="ts">
  let bidPopupOpen = false;
</script>

<style>

</style>

{#if bidPopupOpen}
  <div class="fixed w-[100vw] h-[100vh] pointer-events-none bg-[#0003] top-0 left-0 flex justify-center items-center">
    <div class="w-130 bg-white rounded pointer-events-auto">
      <div class="flex items-start justify-between p-4 border-b rounded-t">
        <h3 class="text-xl font-semibold text-gray-900">
            Opret nyt bud
        </h3>
        <button on:click={_ => bidPopupOpen = false} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
        </button>
      </div>
      <div class="p-6">
        <p class="text-gray-500 pb-6">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
        </p>
        <div class="flex justify-around items-center w-full  gap-4">
          <div class="flex-grow">
            <button  on:click={_ => bidPopupOpen = false} class="text-white bg-blue-700 rounded-md border border-blue-700 hover:bg-blue-800 py-1 outline-none w-full">
              Byd 250 kr.
            </button>
          </div>
          <div class="flex-grow">
            <button  on:click={_ => bidPopupOpen = false} class="text-white bg-blue-700 rounded-md border border-blue-700 hover:bg-blue-800 py-1 outline-none w-full">
              Byd 275 kr.
            </button>
          </div>
          <div class="flex-grow">
            <button  on:click={_ => bidPopupOpen = false} class="text-white bg-blue-700 rounded-md border border-blue-700 hover:bg-blue-800 py-1 outline-none w-full">
              Byd 325 kr.
            </button>
          </div>
        </div>
        <div class="my-4 text-center">
          Eller
        </div>
        <div class="">
          <div class="text-xl">Opret maximalt bud</div>
          <div class="flex justify-between items-center children:h-[inherit] h-9 gap-4">
            <div class="flex-grow flex justify-between items-center children:h-[inherit]">
              <input type="number" class="border rounded border-gray-300 flex-grow px-4">
              <div class="flex items-center pl-2">
                DKK
              </div>
            </div>
            <button on:click={_ => bidPopupOpen = false} class="text-white bg-blue-700 rounded-md border border-blue-700 hover:bg-blue-800 py-1 px-8 outline-none">
              Byd
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
<section class="text-gray-700 body-font overflow-hidden bg-white">
  <div class=" mx-auto flex flex-wrap">
    <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg">
    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
      <h2 class="text-sm title-font text-gray-500 tracking-widest uppercase">BØGER</h2>
      <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
      <div class="flex mb-4">
        <span class="flex items-center">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
          <span class="text-gray-600 ml-3">4 Reviews</span>
        </span>
        <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
          <a href="#/" class="text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a href="#/" class="ml-2 text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a href="#/" class="ml-2 text-gray-500">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
          </a>
        </span>
      </div>
      <p class="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
      <div class="flex mt-6 items-center justify-center pb-5 border-b-2 border-gray-200 mb-5 w-full">

        <button on:click={_ => bidPopupOpen = !bidPopupOpen} class="font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 py-2 px-7 font-bold outline-none">
          Opret nyt bud
        </button>
      
      </div>
      <div>
        <h3 class="text-xl pb-4">Bud historik</h3>
        <div>
            <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 bg-gray-[#0001]">
                <th scope="col" class="py-3 px-6">
                    Navn
                </th>
                <th scope="col" class="py-3 px-6">
                    Bud
                </th>
                <th scope="col" class="py-3 px-6">
                    Tidspunkt
                </th>
            </thead>
            <tbody>
              <tr class="bg-white border-b">
                <!-- svelte-ignore a11y-misplaced-scope -->
                <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    Jens J.
                </td>
                <td class="py-4 px-6">
                  250 kr
                </td>
                <td class="py-4 px-6">
                  40 min siden
                </td>
              </tr>
              <tr class="bg-white border-b">
                <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    Carsten B.
                </td>
                <td class="py-4 px-6">
                  225 kr
                </td>
                <td class="py-4 px-6">
                  2 timer siden
                </td>
              </tr>
              <tr class="bg-white border-b">
                <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    Bent B.
                </td>
                <td class="py-4 px-6">
                  200 kr
                </td>
                <td class="py-4 px-6">
                  3 timer siden
                </td>
              </tr>
              <tr class="bg-white border-b">
                <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    Carsten L.
                </td>
                <td class="py-4 px-6">
                  175 kr
                </td>
                <td class="py-4 px-6">
                  4 timer siden
                </td>
              </tr>
              <tr class="bg-white border-b">
                <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    Jens J.
                </td>
                <td class="py-4 px-6">
                  150 kr
                </td>
                <td class="py-4 px-6">
                  7 timer siden
                </td>
              </tr>
              <tr class="bg-white border-b">
                <td scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                    Bent B.
                </td>
                <td class="py-4 px-6">
                  125 kr
                </td>
                <td class="py-4 px-6">
                  9 timer siden
                </td>
              </tr>
            </tbody>
            </table>
        </div>
      </div>
    </div>
  </div>
</section>