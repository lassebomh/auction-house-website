<script>
  import { faker } from '@faker-js/faker';
</script>
<h1 class="text-5xl pb-8">Hvidevarer</h1>

<div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
  {#each Array.from({length: 24}, () => Math.floor(Math.random() * 4000000)) as random}
    <a href={"#/product/" + random} class="group">
    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
      <img  src={faker.image.technics() + "?random="+random} alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75">
      </div>
      <div class="flex items-center justify-between mt-4">
        <h3 class="text-lg text-gray-700">{faker.commerce.productName()}</h3>
        <p class="text-lg font-medium text-gray-900">$48</p>
      </div>
    </a>
  {/each}
</div>