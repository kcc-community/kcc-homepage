import { useEffect } from 'react'

import { useLanguage } from './hooks'
import { useTranslation } from 'react-i18next'

export default function Updater(): null {
  // init language
  const { i18n } = useTranslation()
  const lang = useLanguage()

  useEffect(() => {
    i18n.changeLanguage(lang)
  }, [])

  return null
}
