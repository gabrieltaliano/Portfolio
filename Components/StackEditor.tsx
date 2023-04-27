import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  onSnapshot,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../lib/firebase";
import { useRef } from "react";
interface stack {
  id: string;
  name: string;
}
export default function StackEditor() {
  const [stack, setStack] = useState<stack[]>([]);
  const [value, setValue] = useState<string>("");
  const collectionRef = useRef(collection(db, "stack"));

  useEffect(() => {
    const unsubscribe = onSnapshot(collectionRef.current, (querySnapshot) => {
      let dataArray: stack[] = [];
      querySnapshot.forEach((doc) => {
        dataArray.push({ name: doc.data().name, id: doc.id });
      });
      setStack(dataArray);
    });

    return () => unsubscribe();
  }, []);
  const handleAdd = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value) {
      await addDoc(collectionRef.current, {
        name: value,
      })
        .then(() => {
          setValue("");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  const handleDelete = async (id: string) => {
    const documentRef = doc(db, "stack", id);

    await deleteDoc(documentRef)
      .then(() => {
        console.log("Deleted!");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const upload = async () => {
    const arr = [
      "AWS",
      "Algolia",
      "Arduino",
      "CSS",
      "Chai",
      "Datadog",
      "Docker",
      "EC2",
      "ElasticSearch",
      "Esxi",
      "Express",
      "Field Support",
      "Firebase",
      "Firestore",
      "GCP",
      "Git",
      "HTML5",
      "Help Desk",
      "IIS",
      "ITIL Service Management",
      "Information Technology Service Management",
      "JavaScript",
      "Jest",
      "Jira",
      "Linux",
      "Lodash",
      "Material UI",
      "MathJs",
      "Micro frontend",
      "Mocha",
      "NextJs",
      "Node",
      "Node.JS",
      "Photoshop",
      "Powershell",
      "QuillJs",
      "Re charts",
      "React",
      "React Native",
      "React Test Library",
      "ReactJs",
      "Recharts",
      "Redis",
      "Redux",
      "SCCM",
      "Scripting",
      "Server Management",
      "SocketIO",
      "Sqlite",
      "Storage Services",
      "Storybook",
      "SysAdmin",
      "Tailwinds",
      "Typescript",
      "Unix",
      "VMware",
      "Virtualization",
      "Vsphere",
      "Windows Server",
    ];

    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];

      await addDoc(collectionRef.current, {
        name: element,
      })
        .then(() => {
          console.log(`Added ${element}`);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <section className="flex flex-col w-full items-center gap-4">
      <h1>StackEditor</h1>
      <button disabled onClick={upload} className="disabled:text-red-700">
        ADD BATCH
      </button>
      <ul className="flex flex-col w-1/5">
        <input
          type="text"
          placeholder="Add new"
          className="bg-green-200/10 py-1"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleAdd}
        />
        {stack
          .sort((a, b) => (a.name < b.name ? -1 : 1))
          .map(({ name, id }) => (
            <li key={id} className="flex gap-1 flex-grow place-content-between">
              <span>{name}</span>
              <button onClick={() => handleDelete(id)}>x</button>
            </li>
          ))}
      </ul>
    </section>
  );
}
