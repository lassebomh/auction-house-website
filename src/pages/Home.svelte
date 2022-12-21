<script>
  import { faker } from '@faker-js/faker';
</script>
<div class="mb-12">
    <h2 class="text-3xl mb-4">Kategorier</h2>

    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 grid-cols-5">
      
      <a href="#/catalog/electronics" class="group relative">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 aspect-none h-40">
            <img src="https://hvidtogfrit.dk/wp-content/uploads/2021/01/forhandler-placeholder-1.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover">
          </div>
          <div class="mt-4 flex justify-between text-gray-700 text-lg">
            Hvidevarer
          </div>
        </a>

      <a href="#/catalog/electronics" class="group relative">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 aspect-none h-40">
            <img src="https://www.loveyourclothes.org.uk/sites/default/files/styles/responsive/public/lyc-campaigns-website-header-1600.jpg?itok=SWO-SNae" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover">
          </div>
          <div class="mt-4 flex justify-between text-gray-700 text-lg">
            Tøj
          </div>
        </a>
        <a href="#/catalog/electronics" class="group relative">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 aspect-none h-40">
            <img src="https://www.americanchemistry.com/var/site/storage/images/6/4/1/3/83146-1-eng-US/Electonic-Devices.png" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover">
          </div>
          <div class="mt-4 flex justify-between text-gray-700 text-lg">
            Elektronik
          </div>
        </a>
        <a href="#/catalog/electronics" class="group relative">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 aspect-none h-40">
            <img src="https://media.4rgos.it/i/Argos/1121-m0014-m007-m050-asym-m008-m022-sbr-outdoors-9397673-patiosets?maxW=768&qlt=75&fmt.jpeg.interlaced=true" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover">
          </div>
          <div class="mt-4 flex justify-between text-gray-700 text-lg">
            Hus og have
          </div>
        </a>
        <a href="#/catalog/electronics" class="group relative">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 aspect-none h-40">
            <img src="https://static.dezeen.com/uploads/2022/07/palefire-studio-paper-pulp-lamps_sq_dezeen_2364_col_7-411x411.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover">
          </div>
          <div class="mt-4 flex justify-between text-gray-700 text-lg">
            Lamper og belysning
          </div>
        </a>

      <!-- More products... -->
    </div>
</div>

<div class="mb-12">
    <h2 class="text-3xl mb-4">Relevante for dig</h2>

    <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {#each Array.from({length: 4}, () => Math.floor(Math.random() * 4000000)) as random}
        <a href={"#/product/"+random} class="group">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img src={faker.image.technics() + "?random="+random} alt="" class="h-50 w-full object-cover group-hover:opacity-75">
          </div>
          <div class="flex items-center justify-between mt-4">
            <h3 class="text-lg text-gray-700">{faker.commerce.productName()}</h3>
            <p class="text-lg font-medium text-gray-900">$48</p>
          </div>
        </a>
      {/each}
    </div>
</div>

<div class="mb-12">
    <h2 class="text-3xl mb-4">Uopdagede produkter</h2>

    <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

      {#each Array.from({length: 4}, () => Math.floor(Math.random() * 4000000)) as random}
        <a href={"#/product/"+random} class="group">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img src={faker.image.technics() + "?random="+random} alt="" class="h-50 w-full object-cover group-hover:opacity-75">
          </div>
          <div class="flex items-center justify-between mt-4">
            <h3 class="text-lg text-gray-700">{faker.commerce.productName()}</h3>
            <p class="text-lg font-medium text-gray-900">$48</p>
          </div>
        </a>
      {/each}
      </div>
</div>

<div class="mb-12">
    <h2 class="text-3xl mb-4">Populære nu</h2>

    <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

      {#each Array.from({length: 4}, () => Math.floor(Math.random() * 4000000)) as random}
        <a href={"#/product/"+random} class="group">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img src={faker.image.technics() + "?random="+random} alt="" class="h-50 w-full object-cover group-hover:opacity-75">
          </div>
          <div class="flex items-center justify-between mt-4">
            <h3 class="text-lg text-gray-700">{faker.commerce.productName()}</h3>
            <p class="text-lg font-medium text-gray-900">$48</p>
          </div>
        </a>
      {/each}
      </div>
</div>