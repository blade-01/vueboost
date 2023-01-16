<template>
  <BaseTable :headers="headers" :data="items">
    <template #subject="item">
      {{ truncateText(item.subject, 50) }}
    </template>
  </BaseTable>
</template>

<script setup lang="ts">
const { truncateText } = useTruncate()
const headers = reactive<object>({
  from: 'From',
  subject: 'Subject',
  received: 'Received'
})
const items = ref<
  {
    from: string
    subject: string
    received: string
    checked: boolean
  }[]
>([
  {
    from: 'Tradelia',
    subject:
      "Unread: Thomas Nunez, check out the Fall 2022 Seller Update- This season's Seller Update includes new features and tools that will help test email...",
    received: 'Aug 21',
    checked: false
  },
  {
    from: 'Tradelia',
    subject:
      "Unread: Thomas Nunez, check out the Fall 2022 Seller Update- This season's Seller Update includes new features and tools that will help test email...",
    received: 'Aug 21',
    checked: false
  },
  {
    from: 'Tradelia',
    subject:
      "Unread: Thomas Nunez, check out the Fall 2022 Seller Update- This season's Seller Update includes new features and tools that will help test email...",
    received: 'Aug 21',
    checked: false
  },
  {
    from: 'Tradelia',
    subject:
      "Unread: Thomas Nunez, check out the Fall 2022 Seller Update- This season's Seller Update includes new features and tools that will help test email...",
    received: 'Aug 21',
    checked: false
  },
  {
    from: 'Tradelia',
    subject:
      "Unread: Thomas Nunez, check out the Fall 2022 Seller Update- This season's Seller Update includes new features and tools that will help test email...",
    received: 'Aug 21',
    checked: false
  }
])
</script>

<style scoped></style>
