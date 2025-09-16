import {BasePage} from '@/core'
import {BASE_URL} from '@/data'
import {test} from '@/fixtures'
import {type Page} from '@playwright/test'

export class AuthPage extends BasePage {
  constructor(page: Page) {
    super(page)
  }

  async openAuthPage(): Promise<void> {
    await test.step('Open auth page', async () => {
      await this.page.goto(`${BASE_URL}/login`)
      await this.validateURL('/login')
    })
  }
}
