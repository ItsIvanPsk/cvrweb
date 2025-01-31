<template>
  <div class="team-member">
    <img :src="imgSrc" :alt="name" class="team-member-img" />
    <h4 class="team-member-name">{{ name }}</h4>
    <p class="team-member-role">{{ role }}</p>
  </div>
</template>

<script>
export default {
  name: "TeamMember",
  props: {
    imgSrc: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.team-member {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1rem;
  border-radius: 8px;
  background-color: #6297C1; /* Primary color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  color: white;
}

.team-member-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid white;
}

.team-member-name {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.team-member-role {
  font-size: 1rem;
  color: white;
}
</style>
