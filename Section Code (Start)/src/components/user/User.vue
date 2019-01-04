<template>
    <div>
        <h1>The User Page</h1>
        <span>Loaded ID: {{ id }}</span>
    </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String
    }
  }
}
</script>
