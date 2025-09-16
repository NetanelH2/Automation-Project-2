import {MainPage} from '@/pages'
import {type PageFixtures} from '@/types'
import {test as base} from '@playwright/test'

export const test = base.extend<PageFixtures>({
  context: async ({browser}, use) => {
    const context = await browser.newContext()
    await use(context)
    await context.close()
  },
  page: async ({context}, use) => {
    const page = await context.newPage()
    await use(page)
  },
  mainPage: async ({page}, use) => {
    await use(new MainPage(page))
  },
})
