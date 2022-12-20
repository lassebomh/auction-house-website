<script lang="ts">
    let bidPopupOpen = false;

    let winner = false;
    let winnerReal = false;

    let bid;

    setTimeout(() => {
        winner = true;

        setTimeout(() => {
            if (!winnerReal) winner = false;
        }, 4000);
    }, 3000);

    function mouseenter() {
        if (!winnerReal) winner = true;
    }
    function mouseleave() {
        if (!winnerReal) winner = false;
    }

    function popupCreateBid(_bid) {
        bid = _bid
        bidPopupOpen = false;
        winner=true;
        winnerReal=true;
    }
</script>
  


<style>
    .bid-fmt {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        /* padding-top: 40px;
        margin-top: 40px; */
        transition: all 0.5s ease-in-out;
        box-shadow: 0px 0px 15px rgba(255, 217, 0, 0), 0px 0px 0px rgba(255, 217, 0, 0);
        margin: 0;
    }

    .bid-fmt > *:not(:first-child) {
        width: 160px;
    }

    .bid-fmt > :first-child {
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .bid :nth-child(4):not(button) {
        opacity: 0.5;
    }

    .bid-yours:not(.bid-winner):not(:hover) :not(:nth-child(3)) {
        /* opacity: 0.6; */
    }

    .bid-winner {
        margin: 1em 0;
        box-shadow: 0px 0px 20px rgba(255, 217, 0, .8), 0px 0px 5px rgba(255, 153, 0, .5);
        border-color: transparent;
    }

    .bid-winner button {
        animation: jump 1s ease-in-out 1s;
        animation-iteration-count: 2;
    }

    .bid-winner:first-child {
        margin: 2em 0;
        margin-top: 0;
    }
    /* .bid-winner :nth-child(3) {
        font-weight: 700;
    } */

    @keyframes jump {
        0% {
            font-size: 1em;
        }
        50% {
            font-size: 1.2em;
        }
        100% {
            font-size: 1em;
        }
    }

</style>


<div>
    <h3 class="text-xl pb-4">Bud historik</h3>
    <div class="bid-fmt text-sm opacity-70 uppercase border border-transparent">
        <div>#</div>
        <div class="py-3 px-6">
            Navn
        </div>
        <div class="py-3 px-6">
            Købs pris
        </div>
        <div class="py-3 px-6">
            Bud
        </div>
    </div>
    <div>
        <div class="bid bid-yours bid-fmt bg-white border" class:bid-winner={winner}>
            <div>
                {#if winnerReal}
                    {Number(winnerReal)+0}
                {/if}
            </div>
            <div class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                Dig
            </div>
            <div class="px-6 font-extrabold text-lg">
                275 kr.
            </div>
            {#if bid}
                <div class="py-4 px-6">
                    {bid} kr.
                </div>
            {:else}
                <button
                    on:click={_ => bidPopupOpen = !bidPopupOpen}
                    class="font-medium text-white bg-green-400 hover:bg-green-500 h-[56px] font-bold outline-none">
                    Tilføj dit bud
                </button>
            {/if}
            <!-- <div class="py-4 px-6">
                300 kr.
            </div> -->
        </div>
        <div class="bid bid-fmt bg-white border" class:bid-winner={!winner}>
            <div>{Number(winnerReal)+1}</div>
            <div class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                Jens J.
            </div>
            <div class="py-4 px-6">
                250 kr.
            </div>
            <div class="py-4 px-6">
                275 kr.
            </div>
        </div>
        <div class="bid bid-fmt bg-white border">
            <div>{Number(winnerReal)+2}</div>
            <div class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                Carsten B.
            </div>
            <div class="py-4 px-6">
                225 kr.
            </div>
            <div class="py-4 px-6">
                250 kr.
            </div>
        </div>
        <div class="bid bid-fmt bg-white border">
            <div>{Number(winnerReal)+3}</div>
            <div class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                Bent B.
            </div>
            <div class="py-4 px-6">
                200 kr.
            </div>
            <div class="py-4 px-6">
                225 kr.
            </div>
        </div>
        <div class="bid bid-fmt bg-white border">
            <div>{Number(winnerReal)+4}</div>
            <div class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                Carsten L.
            </div>
            <div class="py-4 px-6">
                175 kr.
            </div>
            <div class="py-4 px-6">
                200 kr.
            </div>
        </div>
        <div class="bid bid-fmt bg-white border">
            <div>{Number(winnerReal)+5}</div>
            <div class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                Jens J.
            </div>
            <div class="py-4 px-6">
                150 kr.
            </div>
            <div class="py-4 px-6">
                175 kr.
            </div>
        </div>
        <div class="bid bid-fmt bg-white border">
            <div>{Number(winnerReal)+6}</div>
            <div class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                Bent B.
            </div>
            <div class="py-4 px-6">
                125 kr.
            </div>
            <div class="py-4 px-6">
                150 kr.
            </div>
        </div>
    </div>
</div>

{#if bidPopupOpen}
<div class="fixed w-[100vw] h-[100vh] pointer-events-none bg-[#0003] top-0 left-0 flex justify-center items-center">
    <div class="w-130 bg-white rounded pointer-events-auto">
    <div class="flex items-start justify-between p-4 border rounded-t">
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
            <button  on:click={_ => popupCreateBid(300)} class="text-white bg-blue-700 rounded-md border borderlue-700 hover:bg-blue-800 py-1 outline-none w-full">
            Byd 300 kr.
            </button>
        </div>
        <div class="flex-grow">
            <button  on:click={_ => popupCreateBid(350)} class="text-white bg-blue-700 rounded-md border borderlue-700 hover:bg-blue-800 py-1 outline-none w-full">
            Byd 350 kr.
            </button>
        </div>
        <div class="flex-grow">
            <button  on:click={_ => popupCreateBid(450)} class="text-white bg-blue-700 rounded-md border borderlue-700 hover:bg-blue-800 py-1 outline-none w-full">
            Byd 450 kr.
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
            <button on:click={_ => bidPopupOpen = false} class="text-white bg-blue-700 rounded-md border borderlue-700 hover:bg-blue-800 py-1 px-8 outline-none">
            Byd
            </button>
        </div>
        </div>
    </div>
    </div>
</div>
{/if}