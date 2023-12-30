<template>
  <form @submit.prevent="submitForm">
    <div class="from-controll" :class="{ invalid: !form.firstName.isValid }">
      <label for="firstname">Firstname</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="form.firstName.value"
        @blur="validateOneField('firstName')"
      />
      <p v-if="!form.firstName.isValid">First name must not be empty</p>
    </div>
    <div class="from-controll" :class="{ invalid: !form.lastName.isValid }">
      <label for="lastname">Lastname</label>
      <input
        type="text"
        id="lastname"
        v-model.trim="form.lastName.value"
        @blur="validateOneField('lastName')"
      />
      <p v-if="!form.lastName.isValid">Last name must not be empty</p>
    </div>
    <div class="from-controll" :class="{ invalid: !form.description.isValid }">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="form.description.value"
        @blur="validateOneField('description')"
      ></textarea>
      <p v-if="!form.description.isValid">Description must not be empty</p>
    </div>
    <div class="from-controll" :class="{ invalid: !form.hourlyRate.isValid }">
      <label for="hourlyRate">Hourly rate</label>
      <input
        type="number"
        id="hourlyRate"
        v-model.trim="form.hourlyRate.value"
        @blur="validateOneField('hourlyRate')"
      />
      <p v-if="!form.hourlyRate.isValid">
        Hourly rate must be a positive number
      </p>
    </div>
    <div class="from-controll" :class="{ invalid: !form.areas.isValid }">
      <h3>Areas of expertise</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="form.areas.value"
          @blur="validateOneField('areas')"
        />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="form.areas.value"
          @blur="validateOneField('areas')"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="form.areas.value"
          @blur="validateOneField('areas')"
        />
        <label for="career">Career Advisory</label>
      </div>
      <p v-if="!form.areas.isValid">One of those tags must be selected</p>
    </div>
    <p v-if="!isFormValid">
      <strong>Please fix above problems and try again.</strong>
    </p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['new-coatch-added'],
  data() {
    return {
      form: {
        firstName: {
          value: '',
          isValid: true,
          validator: (self) => {
            return self.value !== '';
          },
        },
        lastName: {
          value: '',
          isValid: true,
          validator: (self) => {
            return self.value !== '';
          },
        },
        areas: {
          value: [],
          isValid: true,
          validator: (self) => {
            return self.value.length > 0;
          },
        },
        description: {
          value: '',
          isValid: true,
          validator: (self) => {
            return self.value !== '';
          },
        },
        hourlyRate: {
          value: null,
          isValid: true,
          validator: (self) => {
            return self.value !== null && self.value > 0;
          },
        },
      },
      isFormValid: true,
    };
  },
  methods: {
    submitForm() {
      this.validateForm();

      if (this.isFormValid === false) {
        return false;
      }

      const data = {
        firstName: this.form.firstName.value,
        lastName: this.form.lastName.value,
        areas: this.form.areas.value,
        description: this.form.description.value,
        hourlyRate: this.form.hourlyRate.value,
      };
      this.$emit('new-coatch-added', data);
    },
    validateForm() {
      this.isFormValid = true;
      Object.keys(this.form).forEach((key) => {
        this.validateOneField(key);
      });
    },
    validateOneField(fieldName) {
      this.form[fieldName].isValid = this.form[fieldName].validator(
        this.form[fieldName]
      );
      if (this.form[fieldName].isValid === false) {
        this.isFormValid = false;
      }
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
