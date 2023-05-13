<template>
  <footer>
    <Container class="footer-container">
      <!-- Left -->
      <div class="left">
        <!-- <a v-if="config?.footer?.credits" :href="config?.footer?.credits?.href || '#'" rel="noopener" target="_blank">
          <Component :is="config?.footer?.credits?.icon" v-if="config?.footer?.credits?.icon" class="left-icon" />
          <p v-if="config?.footer?.credits?.text">{{ config.footer.credits.text }}</p>
        </a> -->
      </div>

      <!-- Center -->
      <div class="center">
        <!-- <NuxtLink
          v-for="link in textLinks"
          :key="link.href"
          class="text-link"
          :aria-label="link.text"
          :href="link.href"
          :target="link.target || '_self'"
        >
          {{ link.text }}
        </NuxtLink> -->
      </div>

      <div class="right">
        <!-- <a
          v-for="icon in icons.slice(0, 6 - nbSocialIcons)"
          :key="icon.label"
          class="icon-link"
          rel="noopener"
          :aria-label="icon.label"
          :href="icon.href"
          target="_blank"
        >
          <Icon :name="icon.icon" />
        </a>
        <AppSocialIcons ref="socialIcons" /> -->
      </div>
    </Container>
  </footer>
</template>
