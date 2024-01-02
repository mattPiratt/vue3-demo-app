<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !form.email.isValid }">
      <label for="email">E-Mail</label>
      <input
        type="email"
        id="email"
        v-model.trim="form.email.value"
        @blur="validateOneField('email')"
      />
      <p v-if="!form.email.isValid">This must be valid email address.</p>
    </div>
    <div class="form-control" :class="{ invalid: !form.message.isValid }">
      <label for="message">Message</label>
      <textarea
        id="message"
        rows="5"
        v-model.trim="form.message.value"
        @blur="validateOneField('message')"
      ></textarea>
      <p v-if="!form.message.isValid">Message field must not be empty.</p>
    </div>
    <div class="actions">
      <p v-if="!isFormValid">
        <strong>Please fix above problems and try again.</strong>
      </p>
      <base-button>Send Message</base-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: {
          value: '',
          isValid: true,
          validator: (self) => {
            const emailAddress = self.value;
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
          },
        },
        message: {
          value: '',
          isValid: true,
          validator: (self) => {
            return self.value !== '';
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
        email: this.form.email.value,
        message: this.form.message.value,
      };
      this.$emit('new-coatch-contact-message', data);
    },
    validateForm() {
      this.isFormValid = true;
      Object.keys(this.form).forEach((key) => {
        this.validateOneField(key);
      });
    },
    validateOneField(fieldName) {
      console.log(fieldName);
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
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>
