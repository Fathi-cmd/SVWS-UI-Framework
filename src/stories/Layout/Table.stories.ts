import SvwsUiTable from '../../components/Layout/Table.vue';

export default {
  title: 'SVWS UI/Layout/Table',
  component: SvwsUiTable,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  components: { SvwsUiTable },
  setup() {
    return { args };
  },
  props: Object.keys(argTypes),
  template: `
  <svws-ui-table v-bind="args">
    <template #footer>
      <p>Gruppenaktionen</p>
    </template>
  </svws-ui-table>
  `,
});

export const Default = Template.bind({});
Default.args = {
  multiSelect: false,
  cols: [
    { id: 'kuerzel', title: 'Kuerzel', width: '10%', sortable: true },
    { id: 'nachname', title: 'Nachname', width: '42%', sortable: false },
    { id: 'vorname', title: 'Vorname', width: '42%', sortable: true },
  ],
  rows: [
    { id: 1, kuerzel: 'ALBE', nachname: 'Albers', vorname: 'Mike' },
    { id: 2, kuerzel: 'ALEN', nachname: 'Alencon', vorname: 'Sabine' },
    { id: 3, kuerzel: 'ANDE', nachname: 'Anders', vorname: 'Doreen' },
    { id: 4, kuerzel: 'BAGI', nachname: 'Bagienski', vorname: 'Melanie' },
    { id: 5, kuerzel: 'BALD', nachname: 'Baldes', vorname: 'Maria' },
    { id: 6, kuerzel: 'BECK', nachname: 'Beckmann', vorname: 'Kahtrin' },
    { id: 7, kuerzel: 'ALBE', nachname: 'Albers', vorname: 'Mike' },
    { id: 8, kuerzel: 'ALEN', nachname: 'Alencon', vorname: 'Sabine' },
    { id: 9, kuerzel: 'ANDE', nachname: 'Anders', vorname: 'Doreen' },
    { id: 10, kuerzel: 'BAGI', nachname: 'Bagienski', vorname: 'Melanie' },
    { id: 11, kuerzel: 'BALD', nachname: 'Baldes', vorname: 'Maria' },
    { id: 12, kuerzel: 'BECK', nachname: 'Beckmann', vorname: 'Kahtrin' },
    { id: 13, kuerzel: 'ALBE', nachname: 'Albers', vorname: 'Mike' },
    { id: 14, kuerzel: 'ALEN', nachname: 'Alencon', vorname: 'Sabine' },
    { id: 15, kuerzel: 'ANDE', nachname: 'Anders', vorname: 'Doreen' },
    { id: 16, kuerzel: 'BAGI', nachname: 'Bagienski', vorname: 'Melanie' },
    { id: 17, kuerzel: 'BALD', nachname: 'Baldes', vorname: 'Maria' },
    { id: 18, kuerzel: 'BECK', nachname: 'Beckmann', vorname: 'Kahtrin' },
    { id: 19, kuerzel: 'ALBE', nachname: 'Albers', vorname: 'Mike' },
    { id: 20, kuerzel: 'ALEN', nachname: 'Alencon', vorname: 'Sabine' },
    { id: 21, kuerzel: 'ANDE', nachname: 'Anders', vorname: 'Doreen' },
    { id: 22, kuerzel: 'BAGI', nachname: 'Bagienski', vorname: 'Melanie' },
    { id: 23, kuerzel: 'BALD', nachname: 'Baldes', vorname: 'Maria' },
    { id: 24, kuerzel: 'BECK', nachname: 'Beckmann', vorname: 'Kahtrin' },
    { id: 25, kuerzel: 'BAGI', nachname: 'Bagienski', vorname: 'Melanie' },
    { id: 26, kuerzel: 'BALD', nachname: 'Baldes', vorname: 'Maria' },
    { id: 27, kuerzel: 'BECK', nachname: 'Beckmann', vorname: 'Kahtrin' },
    { id: 28, kuerzel: 'ALBE', nachname: 'Albers', vorname: 'Mike' },
    { id: 29, kuerzel: 'ALEN', nachname: 'Alencon', vorname: 'Sabine' },
    { id: 30, kuerzel: 'ANDE', nachname: 'Anders', vorname: 'Doreen' },
    { id: 31, kuerzel: 'BAGI', nachname: 'Bagienski', vorname: 'Melanie' },
    { id: 32, kuerzel: 'BALD', nachname: 'Baldes', vorname: 'Maria' },
    { id: 33, kuerzel: 'BECK', nachname: 'Beckmann', vorname: 'Kahtrin' },
    { id: 34, kuerzel: 'ALBE', nachname: 'Albers', vorname: 'Mike' },
    { id: 35, kuerzel: 'ALEN', nachname: 'Alencon', vorname: 'Sabine' },
    { id: 36, kuerzel: 'ANDE', nachname: 'Anders', vorname: 'Doreen' },
    { id: 37, kuerzel: 'BAGI', nachname: 'Bagienski', vorname: 'Melanie' },
    { id: 38, kuerzel: 'BALD', nachname: 'Baldes', vorname: 'Maria' },
    { id: 39, kuerzel: 'BECK', nachname: 'Beckmann', vorname: 'Kahtrin' },
  ],
  actions: [
    { id: 1, label: 'Löschen', action: 'delete' },
    { id: 2, label: 'Kopieren', action: 'copy' },
    { id: 3, label: 'Foo', action: 'bar' },
  ],
  footer: true,
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  multiSelect: true,
  cols: [
    { id: 'kuerzel', title: 'Kuerzel', width: '10%', sortable: true },
    { id: 'nachname', title: 'Nachname', width: '45%', sortable: false },
    { id: 'vorname', title: 'Vorname', width: '45%', sortable: true },
  ],
  rows: [
    { id: 1, kuerzel: 'ALBE', nachname: 'Albers', vorname: 'Mike' },
    { id: 2, kuerzel: 'ALEN', nachname: 'Alencon', vorname: 'Sabine' },
    { id: 3, kuerzel: 'ANDE', nachname: 'Anders', vorname: 'Doreen' },
    { id: 4, kuerzel: 'BAGI', nachname: 'Bagienski', vorname: 'Melanie' },
    { id: 5, kuerzel: 'BALD', nachname: 'Baldes', vorname: 'Maria' },
    { id: 6, kuerzel: 'BECK', nachname: 'Beckmann', vorname: 'Kahtrin' },
    { id: 7, kuerzel: 'ALBE', nachname: 'Albers', vorname: 'Mike' },
    { id: 8, kuerzel: 'ALEN', nachname: 'Alencon', vorname: 'Sabine' },
    { id: 9, kuerzel: 'ANDE', nachname: 'Anders', vorname: 'Doreen' },
    { id: 10, kuerzel: 'BAGI', nachname: 'Bagienski', vorname: 'Melanie' },
    { id: 11, kuerzel: 'BALD', nachname: 'Baldes', vorname: 'Maria' },
    { id: 12, kuerzel: 'BECK', nachname: 'Beckmann', vorname: 'Kahtrin' },
    { id: 13, kuerzel: 'ALBE', nachname: 'Albers', vorname: 'Mike' },
    { id: 14, kuerzel: 'ALEN', nachname: 'Alencon', vorname: 'Sabine' },
    { id: 15, kuerzel: 'ANDE', nachname: 'Anders', vorname: 'Doreen' },
    { id: 16, kuerzel: 'BAGI', nachname: 'Bagienski', vorname: 'Melanie' },
    { id: 17, kuerzel: 'BALD', nachname: 'Baldes', vorname: 'Maria' },
    { id: 18, kuerzel: 'BECK', nachname: 'Beckmann', vorname: 'Kahtrin' },
    { id: 19, kuerzel: 'ALBE', nachname: 'Albers', vorname: 'Mike' },
    { id: 20, kuerzel: 'ALEN', nachname: 'Alencon', vorname: 'Sabine' },
    { id: 21, kuerzel: 'ANDE', nachname: 'Anders', vorname: 'Doreen' },
    { id: 22, kuerzel: 'BAGI', nachname: 'Bagienski', vorname: 'Melanie' },
    { id: 23, kuerzel: 'BALD', nachname: 'Baldes', vorname: 'Maria' },
    { id: 24, kuerzel: 'BECK', nachname: 'Beckmann', vorname: 'Kahtrin' },
    { id: 25, kuerzel: 'BAGI', nachname: 'Bagienski', vorname: 'Melanie' },
    { id: 26, kuerzel: 'BALD', nachname: 'Baldes', vorname: 'Maria' },
    { id: 27, kuerzel: 'BECK', nachname: 'Beckmann', vorname: 'Kahtrin' },
    { id: 28, kuerzel: 'ALBE', nachname: 'Albers', vorname: 'Mike' },
    { id: 29, kuerzel: 'ALEN', nachname: 'Alencon', vorname: 'Sabine' },
    { id: 30, kuerzel: 'ANDE', nachname: 'Anders', vorname: 'Doreen' },
    { id: 31, kuerzel: 'BAGI', nachname: 'Bagienski', vorname: 'Melanie' },
    { id: 32, kuerzel: 'BALD', nachname: 'Baldes', vorname: 'Maria' },
    { id: 33, kuerzel: 'BECK', nachname: 'Beckmann', vorname: 'Kahtrin' },
    { id: 34, kuerzel: 'ALBE', nachname: 'Albers', vorname: 'Mike' },
    { id: 35, kuerzel: 'ALEN', nachname: 'Alencon', vorname: 'Sabine' },
    { id: 36, kuerzel: 'ANDE', nachname: 'Anders', vorname: 'Doreen' },
    { id: 37, kuerzel: 'BAGI', nachname: 'Bagienski', vorname: 'Melanie' },
    { id: 38, kuerzel: 'BALD', nachname: 'Baldes', vorname: 'Maria' },
    { id: 39, kuerzel: 'BECK', nachname: 'Beckmann', vorname: 'Kahtrin' },
  ],
  actions: [
    { id: 1, label: 'Löschen', action: 'delete' },
    { id: 2, label: 'Kopieren', action: 'copy' },
    { id: 3, label: 'Foo', action: 'bar' },
  ],
  footer: true,
};
