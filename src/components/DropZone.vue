<template>
  <div>
    <div v-if="!file">
      <div
        :class="['dropZone', dragging ? 'dropZone-over' : '']"
        @dragenter="dragging = true"
        @dragleave="dragging = false"
      >
        <v-icon class="mt-8" large color="primary"> mdi-cloud-upload </v-icon>
        <div @drag="onChange">
          <span class="dropZone-title">Drop file or click to upload</span>
          <div>
            <div>Extension support: txt</div>
            <div>Maximum file size: {{ maxFileSize / 1000000 }} MB</div>
          </div>
        </div>
        <input type="file" @change="onChange" />
      </div>
    </div>
    <div v-else class="dropZone-uploaded">
      <span class="dropZone-title">Uploaded!</span>
      <div class="dropZone-uploaded-info">
        <v-btn class="btn btn-primary removeFile" @click="removeFile">
          Remove File
        </v-btn>
      </div>
    </div>

    <v-card class="mt-4 pa-2" color="primary">
      <v-chip class="mx-2" color="background" label
        >fileName: {{ file.name }}</v-chip
      >
      <v-chip class="mx-2" color="background" label
        >fileSize(bytes): {{ file.size }}</v-chip
      >
      <v-chip class="mx-2" color="background" label
        >extension：{{ extension }}</v-chip
      >
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Dragger",
  props: { onFileLoad: Function, maxFileSize: Number },
  data: () => ({
    file: "",
    dragging: false
  }),
  methods: {
    onChange(e) {
      var files = e.target.files || e.dataTransfer.files;

      if (!files.length) {
        this.dragging = false;
        return;
      }

      this.createFile(files[0]);
    },
    createFile(file) {
      if (!file.type.match("text.*")) {
        alert("please select txt file");
        this.dragging = false;
        return;
      }

      if (file.size > 5000000) {
        alert("please check file size no over 5 MB.");
        this.dragging = false;
        return;
      }

      this.file = file;
      console.log(this.file);
      this.dragging = false;

      this.onFileLoad(this.file);
    },
    removeFile() {
      this.file = "";
    }
  },
  computed: {
    extension() {
      return this.file ? this.file.name.split(".").pop() : "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dropZone {
  width: 100%;
  height: 200px;
  /* position: relative; */
  border: 2px dashed #eee;
  /* background-color: #219ebc; */
  background-color: rgba(var(--v-primary-rgb, 0.9));
}

.dropZone:hover {
  border: 2px solid #2e94c4;
}

.dropZone:hover .dropZone-title {
  color: #1975a0;
}

.dropZone-info {
  color: #a8a8a8;
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translate(0, -50%);
  text-align: center;
}

.dropZone-title {
  color: #787878;
}

.dropZone input {
  position: absolute;
  cursor: pointer;
  top: 0px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.dropZone-upload-limit-info {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
}

.dropZone-over {
  background: #5c5c5c;
  opacity: 0.8;
}

.dropZone-uploaded {
  width: 100%;
  height: 200px;
  position: relative;
  border: 2px dashed #eee;
}

.removeFile {
  width: 200px;
}
</style>
