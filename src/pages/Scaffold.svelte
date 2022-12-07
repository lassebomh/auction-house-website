<script lang="ts">
    import Router from 'svelte-spa-router'
    import NotFound from './NotFound.svelte'

    import Home from './Home.svelte'
    import Product from './Product.svelte'
    import Catalog from './Catalog.svelte'

    const routes = {
        '/': Home,
        '/catalog/*': Catalog,
        '/product/*': Product,
        '*': NotFound,
    }
</script>

<div class="bg-white min-h-[100vh]">
    <header class="relative bg-white">
      <nav aria-label="Top" class="mx-auto max-w-7xl px-4 px-8">
        <div class="border-b border-gray-200">
          <div class="flex h-16 items-center">
            <div class="ml-4 flex ml-0">
              <a href="#/" class="flex justify-center items-center gap-2">
                <div class="p-2 bg-green-700 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="fill-white" viewBox="0 0 16 16">
                        <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z"/>
                    </svg>
                </div>
                <div class="text-xl">
                  Grøn & Olsen
                </div>
              </a>
            </div>
            <div class="ml-8 block self-stretch">
              <div class="flex h-full space-x-8">
                <a href="#/catalog/something" class="flex items-center font-medium text-gray-700 hover:text-gray-800">
                    Alle varer
                </a>
                <a href="#/catalog/something" class="flex items-center font-medium text-gray-700 hover:text-gray-800">
                    Auktioner
                </a>
                <a href="#/catalog/something" class="flex items-center font-medium text-gray-700 hover:text-gray-800">
                    Køb nu
                </a>
                <a href="#/catalog/something" class="flex items-center font-medium text-gray-700 hover:text-gray-800">
                    Om os
                </a>
              </div>
            </div>
            <div class="ml-auto flex items-center">
              <div class="flex flex-1 items-center justify-end space-x-6">
                <a href="#/login" class="font-medium text-gray-700 hover:text-gray-800">Log ind</a>
                <span class="h-6 w-px bg-gray-200" aria-hidden="true"></span>
                <a href="#/register" class="font-medium text-gray-700 hover:text-gray-800">Opret bruger</a>
              </div>
              <div class="flex ml-6">
                <a href="#/catalog/something" class="p-2 text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Search</span>
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </a>
              </div>
              <div class="ml-4 flow-root ml-6">
                <a href="#/catalog/something" class="group -m-2 flex items-center p-2">
                  <svg class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <span class="ml-2 font-medium text-gray-700 group-hover:text-gray-800">0</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <div class="mx-auto max-w-7xl px-4 px-8 py-12">
        <Router {routes} />
    </div>
  </div>
  