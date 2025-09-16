import type {BrowserContext, Page} from '@playwright/test'
import type {MainPage} from '../pages'

export interface PageFixtures {
  context: BrowserContext
  page: Page
  mainPage: MainPage
}
