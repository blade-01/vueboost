<script setup lang="ts">
interface Props<T> {
  headers: object,
  data: T
}
defineProps<Props<any>>()
</script>

<template>
  <div class="mx-auto">
    <div class="overflow-x-auto overflow-y-visible scroll">
      <table class="w-full ">
        <thead class="border border-[#C9CCCF]">
          <tr>
            <th
              v-for="(header, index) in Object.values(headers)"
              :key="index"
              scope="col"
              class="text-xs font-medium px-6 py-2.5 whitespace-nowrap text-left"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, i) in data"
            :key="i"
            class="border border-[#C9CCCF] align-top"
          >
            <td
              v-for="key in Object.keys(headers)"
              :key="key"
              class="text-sm font-medium px-6 py-2.5 whitespace-nowrap"
            >
              <slot :name="key" v-bind="item">
                {{ item[key] }}
              </slot>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>