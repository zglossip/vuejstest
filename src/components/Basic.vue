<template>
    <div class="card">
      <b-img class="card-img-top" :src="$store.state.pokemonImageUrl" alt="Image not found"></b-img>
      <div class="card-body">
        <h5 class="card-title">{{$store.state.pokemon.name.toUpperCase()}}</h5>
        <span>
          {{$store.state.pokemonDescription}}
        </span>
      </div>
    </div>
</template>

