import { AUTHORS, EDITORS, LOGOS } from "./data/contributors";
import references from "./data/references.json"
const respecConfig = {
  subtitle: "Merkle signature proofs with selective disclosure",
  group: "vc",
  specStatus: "unofficial",
  authors: [
    ...AUTHORS
  ],
  editors: [
    ...EDITORS
  ],
  github: {
    branch: "master",
    repoURL: "Open-Attestation/merkle-tree-signature-spec",
  },
  highlightVars: true,
  // disable isPreview to remove the ugly floating red bar
  isPreview: true,
  logos: [...LOGOS],
  xref: {
    specs: ["VC-DATA-MODEL"],
    profile: "web-platform",
  },
  localBiblio: references
};

// expose respecConfig as a global
window.respecConfig = respecConfig