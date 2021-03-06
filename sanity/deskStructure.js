// deskStructure.js
import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Pages')
    .items([
        S.listItem()
          .title('Settings')
          .icon(() => 'âī¸')
          .child(
            S.document()
              .schemaType('settingsPage')
              .documentId('settingsPage')
        ),
        S.listItem()
        .title('Home')
        .icon(() => 'đ ')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
        ),
        S.listItem()
        .title('About')
        .icon(() => 'âšī¸')
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPage')
        ),
        S.listItem()
        .title('Contact')
        .icon(() => 'âī¸')
        .child(
          S.document()
            .schemaType('contactPage')
            .documentId('contactPage')
        ),
        S.divider(),
        ...S.documentTypeListItems().filter(listItem => !['homePage', 'aboutPage', 'settingsPage', 'contactPage'].includes(listItem.getId()))
    ])