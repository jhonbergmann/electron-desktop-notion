import {Menu, Tray, nativeImage, BrowserWindow} from 'electron'
import {resolve} from 'node:path'

export function createTray(window: BrowserWindow) {
  const iconPath = resolve(__dirname, '..', '..', 'resources', 'notionTemplate.png')
  const icon = nativeImage.createFromPath(iconPath)

  if (icon.isEmpty()) {
    /// err in icon here.
    return
  }

  const tray = new Tray(icon)

  const menu = Menu.buildFromTemplate([
    {
      label: 'Notion',
      enabled: false,
    },
    {
      type: 'separator',
    },
    {
      label: 'Criar novo documento',
      click: () => {
        window.webContents.send('new-document')
      },
    },
    {type: 'separator'},
    {label: 'Documentos recentes', enabled: false},
    {
      label: 'Discover',
      accelerator: 'CmdOrCtrl+1',
      acceleratorWorksWhenHidden: false,
    },
    {
      type: 'separator',
    },
    {
      label: 'Sair do Notion',
      role: 'quit',
    },
  ])

  tray.setContextMenu(menu)
}
