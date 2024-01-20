<template>
  <base-card>
    <form @submit.prevent="submitForm">
      <div class="form-control" :class="{ invalid: !form.email.isValid }">
        <label for="email">E-Mail</label>
        <input
          name="email"
          type="email"
          id="email"
          v-model.trim="form.email.value"
          @blur="validateOneField('email')"
        />
        <p v-if="!form.email.isValid">This must be valid email address.</p>
      </div>
      <div class="form-control" :class="{ invalid: !form.password.isValid }">
        <label for="password">Password</label>
        <input
          name="password"
          type="password"
          id="password"
          v-model.trim="form.password.value"
          @blur="validateOneField('password')"
        />
        <p v-if="!form.password.isValid">
          This must be at least 6 characters long.
        </p>
      </div>
      <div>
        <p v-if="!isFormValid">
          <strong>Please fix above problems and try again.</strong>
        </p>

        <base-button>{{ submitButtonCaption }}</base-button>
        <base-button type="button" styleMode="flat" @click="switchAuthMode">{{
          switchModeButtonCaption
        }}</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import formValidationMixin from '../../mixins/formValidationMixin.js';

export default {
  mixins: [formValidationMixin],
  emits: ['new-user-login'],
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
        password: {
          value: '',
          isValid: true,
          validator: (self) => {
            return self.value.length >= 6;
          },
        },
      },
      isFormValid: true,
      formMode: 'login',
    };
  },
  methods: {
    async submitForm() {
      this.validateForm();

      if (this.isFormValid === false) {
        return false;
      }

      const data = {
        email: this.form.email.value,
        password: this.form.password.value,
      };
      this.$emit('new-user-login', data);

      const result = await this.$store.dispatch(
        this.formMode == 'login' ? 'login' : 'signup',
        data
      );
      if (result === true) {
        this.$router.replace({ name: 'coatchesList' });
      }
    },
    switchAuthMode() {
      if (this.formMode == 'login') {
        this.formMode = 'signup';
      } else {
        this.formMode = 'login';
      }
    },
  },
  computed: {
    submitButtonCaption() {
      if (this.formMode === 'login') {
        return 'Login';
      } else {
        return 'Signup';
      }
    },
    switchModeButtonCaption() {
      if (this.formMode === 'login') {
        return 'Signup instead';
      } else {
        return 'Login instead';
      }
    },
  },
};
</script>

<style scoped>
orm {
  margin: 1rem;
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
</style>
