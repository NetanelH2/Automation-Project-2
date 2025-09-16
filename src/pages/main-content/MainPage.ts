import {BasePage} from '@/core'
import {BASE_URL} from '@/data'
import {test} from '@/fixtures'
import {MAIN_PAGE_LOCATORS} from '@/locators'
import type {Page} from '@playwright/test'

export class MainPage extends BasePage {
  constructor(page: Page) {
    super(page)
  }
  async openMainPage(): Promise<void> {
    await test.step('Open main page', async () => {
      const {imageLink} = MAIN_PAGE_LOCATORS
      await this.page.goto(BASE_URL)
      await this.validateVisibility(imageLink)
    })
  }
}
